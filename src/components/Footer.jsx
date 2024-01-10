import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>DevOps Engineer</div>
                    <div>@kohbe</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">처음으로 돌아가기 [Return]</a>
                        </div>
                        <p className="desc">"제 포트폴리오를 살펴봐 주셔서 정말 감사합니다. 궁금한 점이나 피드백이 있으면 언제든 말씀해주세요!"</p>
                    </div>
                    <div className="right">
                        <h4><b>자세한 이력과 링크</b></h4>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.dsec}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; DevOps Engineer kohbe<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer;