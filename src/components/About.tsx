import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const EventsPage = () => {
  // Fetch data using GraphQL
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          
        }
      }
    }
  `);

  // Destructure data
  const { title, description, emails } = data.site.siteMetadata;
  

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      
    </div>
  );
};

export default EventsPage;
