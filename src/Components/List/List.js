import React from "react";
import classnames from "classnames";
import Badge from "../Badge";

        const List = ({items, isRemovable, onClick}) =>{
        return (
            <ul
                onClick={onClick}
                className="list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className ={classnames(item.className, {'active': item.active})}>
                        <i>
                            {item.icon ? (item.icon) : (<Badge color={item.color}/>)}
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        );
    }

export default List;