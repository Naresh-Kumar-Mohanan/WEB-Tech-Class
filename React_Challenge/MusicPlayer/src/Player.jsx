import React, { useState } from 'react'
import data from "./Data.json"
import SideBar from './SideBar'


export default function Player() {
    let [state, setState] = useState(0)


    return (
        <div className="player">
            <main>
                <img src={data[state].imgUrl} alt="" />
                <audio src={data[state].audioUrl} controls />
                <h1>{data[state].name}</h1>
            </main>

            <aside>
                {data.map((e, i, arr) => {
                    return <SideBar element={e} index={i} setState={setState} />
                })}
            </aside>
        </div>
    )
}
