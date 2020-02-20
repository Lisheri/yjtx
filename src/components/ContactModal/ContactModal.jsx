import React from 'react';
import phoneLogo from '../../assets/icons/电话.svg';
import wechatLogo from '../../assets/icons/微信.svg';
import csLogo from '../../assets/icons/客服.svg';
import './ContactModal.scss';
const ContactModal = () => {
    return (
        <div className="modal fade contact-modal" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary" id="staticBackdropLabel">
                            联系我们
                 <img src={ csLogo } alt="客服" />
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <span>
                                <img src={ phoneLogo } alt="手机" />
                                <img src={ wechatLogo } alt="微信" /> :
                            </span>
                            15228309555
                        </div>
                        <div>
                            <span>座机电话: </span>0816-5228088 <small className="text-secondary">(疫情期间暂不可用)</small>
                        </div>
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
