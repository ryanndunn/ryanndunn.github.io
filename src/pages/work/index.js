import React, { useEffect } from 'react'

import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WorkPage = ({ data }) => {

  useEffect(() => {
    if(document.querySelector('#gatsby-focus-wrapper > div').classList.contains('page--work-archive')){
      if (typeof window !== `undefined`) {
        
        const items = document.querySelectorAll('ul.work-text > li');
        const images = document.querySelectorAll('ul.work-images > li');
        const imageContainer = document.querySelector('ul.work-images');
        const arrow = document.querySelector('.page--work-archive > main > i.fa-arrow-right');

        function initActiveItems() {
          const scrollPosition = window.scrollY;

          items.forEach((item) => {
            const itemTop = item.offsetTop;
            const itemBottom = itemTop + item.offsetHeight;
            const itemProject = item.getAttribute('data-project');
            const itemImage = document.querySelector('ul.work-images > li[data-project='+itemProject+']');

            if(itemImage){

              if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
                item.classList.add('active');
                itemImage.classList.add('active');
              } else {
                if(item.classList.contains('active')){
                  item.classList.remove('active');
                }
                
                if(itemImage.classList.contains('active')){
                  itemImage.classList.remove('active');
                }
              }

            }

          });
        };
        
        window.onscroll = function() {initActiveItems()};

        initActiveItems();

        items.forEach((item) => {

          item.onmouseover = function(event) {
            if(item.classList.contains('active')){
              imageContainer.classList.add('hovered');
              arrow.classList.add('hovered');
              item.classList.add('hovered');
            }
          };
    
          item.onmouseout = function(event) {
            imageContainer.classList.remove('hovered');
            arrow.classList.remove('hovered');
            item.classList.remove('hovered');
          };

        });

        images.forEach((image) => {

          const imageProject = image.getAttribute('data-project');
          const item = document.querySelector('ul.work-text > li[data-project='+imageProject+']');

          image.onmouseover = function(event) {
            imageContainer.classList.add('hovered');
            arrow.classList.add('hovered');
            item.classList.add('hovered');
          };
    
          image.onmouseout = function(event) {
            imageContainer.classList.remove('hovered');
            arrow.classList.remove('hovered');
            item.classList.remove('hovered');
          };

        });

      }
    }
  }, [])

  return (
    <Layout pageContainerClass="page--work-archive">
      <ul className="work-text">
        {
            data.allMdx.nodes.map((node) => (
                <li key={node.id} id="" data-project={node.frontmatter.slug}>
                    <h2>
                      <Link to={`/work/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                </li>
            ))
        }

        <ul className="work-images">
          {
              data.allMdx.nodes.map((node) => (
                  <li key={node.id} data-project={node.frontmatter.slug}>
                    <Link to={`/work/${node.frontmatter.slug}`}>
                      <GatsbyImage
                        image={getImage(node.frontmatter.featured_image)}
                        alt={`${node.frontmatter.title} Featured Image`}
                      />
                    </Link>
                  </li>
              ))
          }
        </ul>
      </ul>

      <i className="fa-solid fa-arrow-right"></i>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          featured_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Portfolio Archive" />
export default WorkPage