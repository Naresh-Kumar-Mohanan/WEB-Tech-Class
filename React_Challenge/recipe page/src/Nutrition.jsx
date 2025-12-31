import "./image.css"


export default function Nutrition() {
    return <div className="nutri">
        <h2 id="subHeading">Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <table>
            <tr>
                <td>Calories</td>
                <td id="grams">277kcal</td>
            </tr>
            <tr>
                <td>Carbs</td>
                <td id="grams">0g</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td id="grams">20g</td>
            </tr>
            <tr>
                <td>Fat</td>
                <td id="grams">22g</td>
            </tr>
        </table>
    </div>
}