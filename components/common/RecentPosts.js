import React from 'react';
import { client } from '../../utility/contentful';

const RecentPostsSidebar = props => {
    return(
        <aside className="recentpostssidebar">
            sidebar action
            
        </aside>
    )
}

RecentPostsSidebar.getInitialProps = async ({req}) => {
    let posts;
        return(
            client.getEntries()
                .then(entries => {
                    console.log(entries);
                    posts = entries.items;
                    return posts;
                })
            )
}

export default RecentPostsSidebar;