import React, {Component} from 'react';
import './ScrollSquares.css';
import CopyExample from './CopyText';

class ScrollSquares extends Component {
  
  render() {
   
    
    return (
      <div >
       <div className="horizontal-scroll-wrapper texts">
          <div></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"There are three deeply entrenched assumptions we must conquer to live the way of the Essentialist: “I have to,” “It’s all important,” and “I can do both.” To embrace the essence of Essentialism requires we replace these assumptions with three core truth: “I choose to,” “Only a few things really matter,” and “I can do anything but not everything.” These simple truths awaken us from our non-essential stupor."}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Our highest priority is to protect our ability to prioritize. "}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"If the answer isn’t a definite yes then it should be a no. An Essentialist uses narrow, explicit criteria like “Is this exactly what I am looking for?”"}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Courage is grace under pressure. —Ernest Hemingway"}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"The deeper I have looked at the subject of Essentialism the more clearly I have seen courage as key to the process of elimination. Without courage, the disciplined pursuit of less is just lip service. It is just the stuff of one more dinner party conversation. It is skin deep."}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Productivity in my experience consists of NOT doing anything that helps the work of other people but to spend all one’s time on the work the Good Lord has fitted one to do, and to do well."}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"When people ask us to do something, we can confuse the request with our relationship with them. Sometimes they seem so interconnected, we forget that denying the request is not the same as denying the person. Only once we separate the decision from the relationship can we make a clear decision and then separately find the courage and compassion to communicate it."}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Essentialists accept they cannot be popular with everyone all of the time. Yes, saying no respectfully, reasonably, and gracefully can come at a short-term social cost. But part of living the way of the Essentialist is realizing respect is far more valuable than popularity in the long run."}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Half of the troubles of this life can be traced to saying yes too quickly and not saying no soon enough. —Josh billings"}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Sunken-cost bias is the tendency to continue to invest time, money, or energy into something we know is a losing proposition simply because we have already incurred,, or sunk, a cost that cannot be recouped. But of course this can easily became a vicious cycle: the more we invest, the more determined we become to see it through and see our investment pay off. The more we invest in something, the harder it is to let go. An essentialist has the courage and confidence to admit his or her mistakes and uncommit, no matter the sunk costs."}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"Beware of the endowment effect, our tendency to undervalue things that aren’t ours and to overvalue things because we already own them. A simple antidote to the endowment effect is don’t ask, “How will I feel if i miss out on this opportunity?” but rather, “If I did not have this opportunity, how much would I be willing to sacrifice in order to obtain it?”"}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"The Latin root of the word decision- cis or cid- literally means “to cut” or “to kill.” Every cut produces joy- maybe not in the moment but afterwards, when we realize that every additional moment we have gained can be spent on something better. That may be one reason why Stephen King has written, “To write is human, to edit is divine.”"}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"NO IS A COMPLETE SENTENCE. —Anne Lamott Boundaries are a little like the walls of a sandcastle. The second we let one fall over, the rest of them come crashing down. "}/></div>

        </div>
        <div>
        <div className="horizontal-scroll-wrapper squares">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>
        </div>
      </div>
    )
  
  }
}

export default ScrollSquares;