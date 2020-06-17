import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import $ from "jquery";

class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };

//     ReactGA.initialize("UA-110570651-1");
//     ReactGA.pageview(window.location.pathname);
//   }

//   getResumeData() {
//     $.ajax({
//       url: "/resumeData.json",
//       dataType: "json",
//       cache: false,
//       success: function(data) {
//         this.setState({ resumeData: data });
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.log(err);
//         alert(err);
//       }
//     });
//   }

//   componentDidMount() {
//     this.getResumeData();
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header data={this.state.resumeData.main} />
//         <About data={this.state.resumeData.main} />
//         <Portfolio data={this.state.resumeData.portfolio} />
//         <Resume data={this.state.resumeData.resume} />
//         <Testimonials data={this.state.resumeData.testimonials} />
//         {/* <Contact data={this.state.resumeData.main}/> */}
//         <Footer data={this.state.resumeData.main} />
//       </div>
//     );
//   }
}

export default App;