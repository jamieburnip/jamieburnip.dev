import React from "react";
import { Link } from "gatsby";

export default class Quotation extends React.Component {
  render() {
    const quote = this.props.quote;
    
    return (
        <blockquote className="quotation" key={quote.name}>
            <p>{quote.quote}</p>
            <cite>— {quote.name}</cite>
        </blockquote>
    );
  }
}
