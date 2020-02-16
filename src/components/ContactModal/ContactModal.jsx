import React from 'react';

const ContactModal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">联系我们</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        移动电话:15228309555 <br />
                        qq:745497099
                        <br />
                        座机电话:0816-5228088 (疫情期间暂不可用)
</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">退回</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;
