import React from 'react';
import { ComponentsTypes } from '../types';

//Lists for <ul> 
// 0) -> 
// 1) -> <a></a>
// 2) -> <img />

//ARGUMENTS:
//element -> component name (ex. p, h2, span, etc.)
//class -> class name (for all/main list(ul) in this component)
//lists -> an object that contains a list of all the required values
//  LISTS ARGUMENTS:
//      id      -> identifier
//      href    -> element reference (for <a></a>)
//      text    -> text for element (for <a></a> or "")
//      class   -> class name (for <img />)
//      src     -> element reference (for <img />)
const List = (props: ComponentsTypes.ListPropsType) => {
    return (
        <ul className={props.class}>
        {   props.element === undefined ?   props.lists.map(list => { 
                return <li key={list.id}>{list.text}</li>
            })
            :   props.element === 'img' ?   props.lists.map(list => { 
                    return <li key={list.id}><props.element alt='Icons' className={list.class} src={list.src} /></li>
                })
            :   props.element === 'a' ?    props.lists.map(list => { 
                    return <li key={list.id}><props.element href={list.href}>{list.text}</props.element></li>
            })
            :   <span></span>
        }
        </ul>
    );
}

export default List;