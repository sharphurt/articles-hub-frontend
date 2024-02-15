import React, {createElement} from 'react';
import {TYPE_TAG_MAP} from "../constants/constants";

function Article({article}) {
    const createNode = (node) => {
        const tag = TYPE_TAG_MAP[node.type]
        const children = [<span>{node.content}</span>]

        node.children?.forEach(childNode => children.push(createNode(childNode)))

        return createElement(tag, {
                id: `${tag}-${node.lineNumber}`,
                className: `class-${tag} article-node`,
                key: node.lineNumber
            },
            children)
    }

    return (
        <div className={'article-container'}>
            {article?.nodes.map(node => createNode(node))}
        </div>
    );
}

export default Article;