import React from 'react';
import phoneLogo from '../../assets/icons/电话.svg';
import wechatLogo from '../../assets/icons/微信.svg';
import homePhoneLogo from '../../assets/icons/座机.svg';
import csLogo from '../../assets/icons/客服.svg';
import qrCode from '../../assets/qr_code/客服1.jpg';
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
                                :
                            </span>


                            <span className="text-success">
                                15228309555
                                </span>
                        </div>
                        <div>
                            <span>
                                <img src={ homePhoneLogo } alt="座机" />
                                : </span>

                            <span className="text-success">0816-5228088
                                    </span>
                        </div>
                        <div>
                            <span>
                                <img src={ wechatLogo } alt="微信" />:
                            </span>
                            <img className='qr-code' src={ qrCode } alt="二维码" />
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
