import React from "react";

class HomeIntro extends React.Component {
    render() {
        return (
            <div>
                <p
                    className="text-sm-left"
                    style={{ textDecoration: "underline" }}
                >
                    <b>비정형 문서를 정형데이터</b>로 변환해주는 사이트입니다.
                </p>
                <br />

                <p className="text-sm-left">
                    {" "}
                    회원가입 이후 <b>LOGIN</b>을 통해서 자신만의 추출 데이터를
                    영구 저장 가능하며, <b>Search</b>를 이용하여 PDF 수집 및
                    필요 데이터 검색이 가능합니다.
                    <br />
                    <br />
                    이후 <b>Data</b> 에서 비 정형 문서를 정형 데이터로
                    변환해주며, 관련 데이터 확인 및 CSV 파일 추출을 할 수
                    있습니다.
                </p>
            </div>
        );
    }
}

export default HomeIntro;
