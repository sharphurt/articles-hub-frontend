import React, {createElement} from 'react';
import {TYPE_TAG_MAP} from "../constants/constants";

function ContentTable({article}) {
    const createNode = (node) => {
        if (node.type === "TEXT")
            return

        const tag = TYPE_TAG_MAP[node.type]
        const children = [<a href={`#${tag}-${node.lineNumber}`}>{node.content}</a>]

        node.children?.forEach(childNode => children.push(createNode(childNode)))

        return createElement(tag, {
                className: `class-${tag} content-table`
            },
            children)
    }

    const headerNodes = article?.nodes.map(node => createNode(node));

    return (
        headerNodes.some(e => typeof e !== 'undefined') &&
        <div className={'content-table-container'}>
            <div className={'page-header'}>Content table:</div>
            {article?.nodes.map(node => createNode(node))}
            <hr/>
        </div>
    );
}

export default ContentTable