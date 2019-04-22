import React from "react";
import Layout from "../components/layout";
import { client } from "../utility/contentful";
import ProjectItem from "../components/blog/projectItem";
import Head from "next/head";

const Projects = props => {
    return (
        <>
            <Head>
                <title>Isaac Doud - Projects</title>
            </Head>
            <div className="bloglist">
                {props.projects.map((item, i) => {
                    return (
                        <ProjectItem
                            data={item.fields}
                            sys={item.sys}
                            title={item.fields.title}
                            key={i}
                        />
                    );
                })}
            </div>
        </>
    );
};

Projects.getInitialProps = async ({ req }) => {
    const res = await client
        .getEntries({
            content_type: "portfolioItem"
        })
        .then(entries => {
            console.log(entries);
            return entries.items;
        });
    console.log(res);
    return { projects: res };
};

export default Projects;
