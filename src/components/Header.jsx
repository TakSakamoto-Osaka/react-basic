import React from "react";

export function Header({ siteTitle = "サイト名未設定" }) {
    const handleClick = () => {
        alert("当社では、プログラミング学習者向けにReactを活用した実践的な学習教材をていきょうしています。Reactの基本から応用まで、手を動かしながら学べるコンテンツを通じて、確かなスキル習得を目指せます。");
    }


    return(
        <header>
            <nav>
                <h1>{siteTitle}</h1>
                <ul>
                    <li><a href="#" onClick={handleClick}>会社概要</a></li>
                </ul>
            </nav>
        </header>
    );
}
