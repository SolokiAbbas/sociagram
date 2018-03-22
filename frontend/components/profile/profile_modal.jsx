import React from 'react';

class ProfileModal extends React.Component{

  render(){
    return(
      <div class="modal fade" id={`ModalPost${this.props.post.id}`} tabindex="-1" role="dialog" aria-labelledby={`ModalPost${this.props.post.id}`} aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id={`ModalPost${this.props.post.id}`}>Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ProfileModal;
