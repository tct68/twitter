import React, { Component } from 'react'
import './editor/editorStyles.css'
import './editor/buttonStyles.css'
import './editor/toolbarStyles.css'
import Editor from '@draft-js-plugins/editor'
import { EditorState } from 'draft-js'
import _ from 'lodash'
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar'
import '@draft-js-plugins/inline-toolbar/lib/plugin.css'
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons'

const inlineToolbarPlugin = createInlineToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin
const plugins = [inlineToolbarPlugin]

interface CreateNewPostState {
  editorState: EditorState
}

class CreateNewPost extends Component<{}, CreateNewPostState> {
  constructor(props: any) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState: any) => {
    this.setState({ editorState })
  }

  render() {
    const { editorState } = this.state
    const buttons = [
      HeadlineOneButton,
      HeadlineTwoButton,
      HeadlineThreeButton,
      ItalicButton,
      BoldButton,
      UnderlineButton,
      OrderedListButton,
      CodeButton,
      UnorderedListButton,
      BlockquoteButton,
      CodeBlockButton,
    ]

    return (
      <>
        <div className='flex row fixed bottom-15 z-9999'></div>
        <div className='editor-container'>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            editorKey='CustomInlineToolbarEditor'
            plugins={plugins}
          />
          <InlineToolbar>
            {(externalProps) => (
              <div>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <CodeButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
              </div>
            )}
          </InlineToolbar>
        </div>
      </>
    )
  }
}

export default CreateNewPost
