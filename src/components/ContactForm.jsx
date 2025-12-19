import React, { useState } from 'react';

export function ContactForm() {
    //  入力データの状態管理
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();     // フォーム送信時のリロード防止

        if (!name.trim()) {
            alert("氏名を入力してください。");
            return;
        }

        if (!message.trim()) {
            alert("お問い合わせ内容を入力してください。");
            return;
        }

        alert(`お問い合わせを承りました。\n\n【氏名】${name}\n【内容】${message}`);

        // 入力欄のリセット
        setName("");
        setMessage("");
    }

    // フォームを構築して出力
    return (
        <section>
            <h3>お問い合わせフォーム</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">氏名：</label>
                    <input
                        id="name"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        placeholder="氏名を入力してください"
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="message">お問い合わせ内容：</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="お問い合わせ内容を入力してください"
                        rows="4"
                    />
                </div>

                <button type="submit">送信</button>
            </form>
        </section>

    )
}
