import "./Youtube.css";

function Youtube(): JSX.Element {

    const brands = [
        { id: 1, brand: "Nike" },
        { id: 2, brand: "Air Jordan" },
        { id: 3, brand: "Adidas" },
    ]

    return (
        <div className="Youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1lIPbN6fuNo"></iframe>

            <h2>המותגים הנמכרים ביותר</h2>

            {brands.map(b =>

                <ul key={b.id}>
                    <li>{b.brand}</li>
                </ul>
            )}

        </div>
    );
}

export default Youtube;
