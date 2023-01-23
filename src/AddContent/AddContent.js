import React, { Component, useState } from 'react';
import { EditorState ,convertToRaw,ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './AddContent.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useParams } from 'react-router-dom';
import { withRouter } from "react-router";

class AddContent extends Component {
  constructor(props) {
    super(props);

     this.state =
     {content : "",
     id_content :"" ,
      id_article:"",
      articleimg:""
      // count : [this.props.match.params.id]
    }

    const html = '';

    const contentBlock = htmlToDraft(html);

  
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      
      };
    }
    

  this.Onsubmithandler = this.Onsubmithandler.bind(this)
  this.handlegetcontent = this.handlegetcontent.bind(this)

  }

 

   onEditorStateChange = (editorState) => {
    this.setState({
      editorState
 
    });
  };



 componentDidMount(){

  fetch("https://soccer-data.vercel.app/AddContent/countContent")
  .then(response => response.text())
  .then(result => {
  
    let id = Number(result)+1
    console.log(id)
     this.setState({id_content :id })})
  .catch(error => console.log('error', error));


  

 }



handlegetcontent(e) {
  
  this.setState({content:  draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))})
  this.setState({articleimg:  "eeeee"})
  const para = window.location.href.split('/')[4]
  const id = para.replace('?','')
  console.log(id)
  this.setState({id_article : id.toString() })
  alert("done !")
}
// handleidarticle(e) {
//   const id_article = e.target.value
//   console.log("dddd0"+id_article)
//   this.setState({id_article:  id_article})
// }
// handleidcontent(e) {
//   const id_content = e.target.value
//   this.setState({id_content:id_content  })

// }

  Onsubmithandler = async (e)=>{
   e.preventDefault();
   console.log("eee0"+this.state.id_content)

   let content =  this.state.content;
   let id_content =  this.state.id_content;
   let id_article =  this.state.id_article;
   let articleimg =  this.state.articleimg;

   let data = {content,id_article,id_content}

  //  console.log(this.state.content , this.state.id)
   fetch("https://soccer-data.vercel.app/AddContent", {
     method: "POST",
     headers: { "Content-Type": "application/json" },

     body: JSON.stringify(data),
   })
     .then((res) => {
       console.log(res.json());
       alert("done !")
     })
     .catch((err) => {
       console.log(err);
     });

    
 }



  render() {
    const { editorState } = this.state;
 
     
    return (

      <div>
        <Editor
       
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
           
            blockType: { inDropdown: false },
            colorPicker: { inDropdown: false },
            image: {
              previewImage: true,
              alt: { present: true, mandatory: false },
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            }
          
  
          }}
        />
        <form onSubmit={this.Onsubmithandler} method='POST'>
        <textarea
          
 style={{color:"black"}}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          onChange={this.handleChange}
        />
        {/* <input hidden type="number" onClick={this.handleidarticle} value={id} /> */}
        {/* <input hidden type="number" onClick={this.handleidcontent} value={id_content} /> */}
        <i className='getcontenti' onClick={this.handlegetcontent}>Get Content</i>

        <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

 
export default AddContent;
