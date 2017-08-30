import React from 'react';
import { Redirect } from 'react-router-dom';

class PostsForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      imageFile: null,
      imageUrl: null,
      redirect: false,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }
  updateFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) { fileReader.readAsDataURL(file);}
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    formData.append("post[body]", this.state.body);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    this.props.createAPost(formData);
    this.setState({redirect: true});
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render(){
    if(this.state.redirect === false){
    return(
    <form className="posts-form" onSubmit={this.handleSubmit}>
        <input className="input-field" placeholder="Title" onChange={this.update('title')} value={this.state.username} />
        <img className="preview-image" src={this.state.imageUrl}/>
        <textarea className="input-form" placeholder="Body" onChange={this.update('body')}>{this.state.username}</textarea>
        <div className="sub-buttons">
        <div className="upload-button">
          Upload
          <input required className="up-button" type="file" onChange={this.updateFile}/>
        </div>
        <input className="submit-button" type="submit" value="Make Post" />
        </div>
    </form>
  );} else {
    return(<Redirect to="/"/>);
  }
  }
}
export default PostsForm;
