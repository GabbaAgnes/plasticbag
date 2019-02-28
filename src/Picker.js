import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch'
import InfiniteScroll from 'react-infinite-scroller'
import './Picker.css'

Array.prototype.chunk = function (groupsize) {
	var sets = [],
		chunks,
		i = 0
	chunks = this.length / groupsize

	while (i < chunks) {
		sets[i] = this.splice(0, groupsize)
		i++
	}

	return sets
}

Array.prototype.clone = function() {
	return this.slice(0);
}

function debounce(fn, delay) {
	var timer = null
	return function () {
		var context = this,
			args = arguments
		clearTimeout(timer)
		timer = setTimeout(function () {
			fn.apply(context, args)
		}, delay)
	}
}

export default class Picker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gifs: [],
			searchValue: '',
			loading: false,
			hasMore: true,
			giphySearchUrl: `https://api.giphy.com/v1/gifs/search?api_key=${
				this.props.apiKey
				}`,
			giphyTrendingUrl: `https://api.giphy.com/v1/gifs/trending?api_key=${
				this.props.apiKey
				}`,
			page: 0
		}

		this.searchGifs = debounce(this.searchGifs, 500)
	}

	static get propTypes() {
		return {
			onSelected: PropTypes.func.isRequired,
			apiKey: PropTypes.string,
			loader: PropTypes.element,
			placeholder: PropTypes.string,
			imagePlaceholderColor: PropTypes.string,
			inputClassName: PropTypes.string,
			children: PropTypes.element
		}
	}

	static get defaultProps() {
		return {
			apiKey: 'IFi4RzT7NxvWjFC845z185zLEwjfObX5',
			placeholder: 'If you want to use Gifs...',
			imagePlaceholderColor: '#E3E3E3',
			loader: <p>Loading...</p>
		}
	}

	componentDidMount() {
		this.loadTrendingGifs()
	}

	loadTrendingGifs = offset => {
		const { giphyTrendingUrl, page, loading } = this.state
		if (loading) {
			return
		}

		let url = giphyTrendingUrl
		if (offset) {
			url += '&offset=' + offset
		}

		this.setState({
			loading: true
		})
		fetch(url, {
			method: 'get'
		})
			.then(res => res.json())
			.then(response => {
				let gifs = response.data.map(g => g.images)
				let hasMore = true
				const { total_count, count, offset } = response.pagination
				if (total_count <= count + offset) {
					hasMore = false
				}

				this.setState({
					gifs: this.state.gifs.concat(gifs),
					page: page + 1,
					loading: false,
					hasMore: hasMore
				})
			})
	}

	searchGifs = offset => {
		const { giphySearchUrl, searchValue, page, loading } = this.state
		if (searchValue.length < 1) {
			return
		}
		if (loading) {
			return
		}

		let url = giphySearchUrl + '&q=' + searchValue.replace(' ', '+')
		if (offset) {
			url += '&offset=' + offset
		}

		this.setState({
			loading: true
		})
		fetch(url, {
			method: 'get'
		})
			.then(res => res.json())
			.then(response => {
				let gifs = response.data.map(g => g.images)
				let hasMore = true
				const { total_count, count, offset } = response.pagination
				if (total_count <= count + offset) {
					hasMore = false
				}

				this.setState({
					gifs: this.state.gifs.concat(gifs),
					page: page + 1,
					loading: false,
					hasMore: hasMore
				})
			})
	}

	onGiphySelect = gif => {
		this.props.onSelected(gif)
	}

	onSearchChange = event => {
		let value = event.target.value
		event.stopPropagation()
		this.setState({
			searchValue: value,
			page: 0,
			gifs: []
		})
		if (value) {
			this.searchGifs()
		} else {
			this.loadTrendingGifs()
		}
	}

	onKeyDown = event => {
		if (event.key === 'Escape') {
			event.preventDefault()
			this.reset()
		}
	}

	reset = () => {
		this.setState({ searchValue: '' })
	}

	loadMore = () => {
		const { searchValue, page } = this.state
		let nextPage = page + 1
		let offset = (Number(nextPage) - 1) * 25
		if (searchValue) {
			this.searchGifs(offset)
		} else {
			this.loadTrendingGifs(offset)
		}
	}

	render() {
		const { gifs, loading, hasMore } = this.state
		const rowChunks = gifs.clone().chunk(9)
		return (
			<div className="pickerWrapper">
				<div id="giphyPickerWrapper" className={'giphy-picker'}>
				
					<input
						name="giphy-search"
						type="text"
						className={this.props.inputClassName}
						autoCapitalize="none"
						autoComplete="off"
						autoCorrect="off"
						onChange={this.onSearchChange}
						value={this.state.searchValue}
						onKeyDown={this.onKeyDown}
						placeholder={this.props.placeholder}
					/>
					<div className="giphyWrapper">
						<InfiniteScroll
							loadMore={this.loadMore}
							hasMore={!loading && hasMore}
							initialLoad={false}
							useWindow={false}
							threshold={700}
						>
							{!rowChunks.length && loading && this.props.loader}
							<div className="giphyWrapperRow">
								{rowChunks.map((gifs, i) => {
									return (
										<div className="giphyColumn" key={i}>
											{gifs.map((g, j) => {
												let gifUrl = g.fixed_width.url
												return (<Giphy
													key={j}
													style={{
														width: '100%',
														height: Number(g.fixed_width.height),
														backgroundColor: this.props.imagePlaceholderColor
													}}
													src={gifUrl}
													onClick={() => {
														this.onGiphySelect(g)
													}}
												/>)

											})}
										</div>
									)
								})}
							</div>
						</InfiniteScroll>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
}






const Giphy = styled.img`
	border-radius: 3px;
	margin-top: 8px;
	box-sizing: border-box;
	vertical-align: middle;
`

