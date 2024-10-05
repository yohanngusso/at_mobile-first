import { useState } from 'react';
import './App.css';

const linksAT = [
    { href: "src/AT/01/index.html", text: "AT 1" },
    { href: "src/AT/02/index.html", text: "AT 2" },
    { href: "src/AT/03/index.html", text: "AT 3" },
    { href: "src/AT/04/index.html", text: "AT 4" },
    { href: "src/AT/05/index.html", text: "AT 5" },
    { href: "src/AT/06/index.html", text: "AT 6" },
    { href: "src/AT/07/index.html", text: "AT 7" },
    { href: "src/AT/08/index.html", text: "AT 8" },
    { href: "src/AT/09/index.html", text: "AT 9" },
    { href: "src/AT/10/index.html", text: "AT 10" },
    { href: "src/AT/11/index.html", text: "AT 11" },
    { href: "src/AT/12/index.html", text: "AT 12" },
    { href: "src/AT/13/index.html", text: "AT 13" },
    { href: "src/AT/14/index.html", text: "AT 14" },
    { href: "src/AT/15/index.html", text: "AT 15" },
    { href: "src/AT/16/index.html", text: "AT 16" },
];

export default function App() {
    const [selectedAT, setSelectedAT] = useState('AT');

    const links = selectedAT === 'AT' ? linksAT : (selectedAT === 'AT');

    return (
        <main>
            <h1>Assessment</h1>
            <div>
                <button className="AT-button" onClick={() => setSelectedAT('AT')}>AT</button>
            </div>
            <ul className="link-list">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </main>
    );
}