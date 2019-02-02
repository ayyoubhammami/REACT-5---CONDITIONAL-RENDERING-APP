import React, {Component} from "react";

class Box extends Component {
	render() {
		const borderr={
			
			border:'solid 3px '+((this.props.gender ==='male')? 'blue': 'yellow'),
		}
	
		
		
		return(

			
				
		<div className="cap">
				
        <img src={this.props.imgg} style={{marginLeft:this.props.margL,...borderr}}  className="cap"  alt="capt" />
        <p className="nom">{this.props.nom} <b>{this.props.prenom}</b></p>
		<p className="desc">{this.props.role1}</p>
		<p className="desc">{this.props.role2}</p>

            </div>
			
		);
	}
}

export default Box;