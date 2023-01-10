import React, { Component, useState } from 'react';
import { EditorState ,convertToRaw,ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import './AddContent.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { useParams } from 'react-router-dom';
import useFetch from "../Hook/UseFetch";

class Texteditor extends Component {
  constructor(props) {
    super(props);

    //  this.state =
    //  {content : '',
    //   count : [this.props.match.params.id]
    // }

    const html = '';

    const contentBlock = htmlToDraft(html);

  
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      
      };
    }
    
//  this.handleChange = this.handleChange.bind(this);

//   this.Onsubmithandler = this.Onsubmithandler.bind(this)

  }

  // handleChange(event) {
  //   this.setState({count: event.target.value});
  // }

   onEditorStateChange = (editorState) => {
    this.setState({
      editorState
 
    });
  };

//   const {Data:count} = useFetch('http://localhost:3001/countContent');
//   const {id:id_article}= useParams();
//  const allcontent = {id_article , content, count  };

//  componentDidMount(){
//    const {Data:countdata} = useFetch('http://localhost:3001/countContent');
//    this.setState({count :countdata })
//  }

//   Onsubmithandler = (e)=>{
//    e.preventDefault();
//    fetch("http://localhost:3001/AddArticles", {
//      method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify(this.count),
//    })
//      .then((res) => {
//        console.log(res.text());
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//  }



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
     
        <textarea
          disabled
 style={{color:"black"}}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          onChange={this.handleChange}
        />
 
      </div>
    )
  }
}

 
export default Texteditor;