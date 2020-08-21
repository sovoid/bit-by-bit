import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import CategoryIcons from "../svg/categories";

const Nav = styled.nav`
  display: block;
  margin: 0;
  padding: 0 0 2em;
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 1em 0;
  }
`;

const CategoryItemList = styled.ul`
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin: 0 -20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    &:after {
      content: "";
      width: 40px;
      flex: 0 0 auto;
    }
  }
`;

const CategoryItem = styled.li`
  width: 70px;
  margin: 20px 20px 0 0;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    width: 60px;
    flex: 0 0 auto;
    margin: 0 0 0 15px;
  }
  .cat-item__link {
    color: #fff;
  }

  .cat-item__image {
    padding: 2px;
    background: ${(props) => props.theme.colors.blackLight};
    border-radius: 50%;
    position: relative;
    img {
      position: relative;
      background: ${(props) => props.theme.colors.blackLight};
      border-radius: 50%;
      display: block;
      z-index: 2;
    }
  }
  .cat-item__name {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.gray};
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      font-size: 12px;
    }
  }
  &.active {
    .cat-item__image:after {
      content: "";
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.gradient};
      animation: rotating 2s linear infinite;
    }
    img {
      border: solid 2px ${(props) => props.theme.colors.background};
    }
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const CategoryLink = ({ catName, catIcon, catLink, path }) => {
  return (
    <CategoryItem className={catLink === path && "active"}>
      <Link to={catLink} className="cat-item__link">
        <div className="cat-item__image">
          <img src={catIcon} alt={catName} />
        </div>
        <div className="cat-item__name">{catName}</div>
      </Link>
    </CategoryItem>
  );
};

const companies = [
  {
    name: "New",
    icon: CategoryIcons.latest,
    link: "/",
  },
  {
    name: "Facebook",
    icon: CategoryIcons.facebook,
    link: "/category/facebook",
  },
  {
    name: "Amazon",
    icon: CategoryIcons.amazon,
    link: "/category/amazon",
  },
  {
    name: "Adobe",
    icon: CategoryIcons.adobe,
    link: "/category/adobe",
  },
  {
    name: "Microsoft",
    icon: CategoryIcons.microsoft,
    link: "/category/microsoft",
  },
  {
    name: "Google",
    icon: CategoryIcons.google,
    link: "/category/google",
  },
];

const algorithms = [
  {
    name: "Backtracking",
    icon: CategoryIcons.backtracking,
    link: "/category/backtracking",
  },
  {
    name: "Bits",
    icon: CategoryIcons.bits,
    link: "/category/bits",
  },
  {
    name: "D&C",
    icon: CategoryIcons.dnc,
    link: "/category/divide-and-conquer",
  },
  {
    name: "DP",
    icon: CategoryIcons.dp,
    link: "/category/dynamic-programming",
  },
  {
    name: "Graph",
    icon: CategoryIcons.graph,
    link: "/category/graph",
  },
  {
    name: "Tree",
    icon: CategoryIcons.tree,
    link: "/category/tree",
  },
];

const basicDataStructures = [
  {
    name: "Array",
    icon: CategoryIcons.array,
    link: "/category/array",
  },
  {
    name: "Linked List",
    icon: CategoryIcons.linkedlist,
    link: "/category/linked-list",
  },
  {
    name: "Queue",
    icon: CategoryIcons.queue,
    link: "/category/queue",
  },
  {
    name: "Stack",
    icon: CategoryIcons.stack,
    link: "/category/stack",
  },
  {
    name: "String",
    icon: CategoryIcons.string,
    link: "/category/string",
  },
  {
    name: "Heap",
    icon: CategoryIcons.heap,
    link: "/category/heap",
  },
];

const CategoryMenu = ({ location }) => {
  const path = location.pathname;
  return (
    <Nav>
      <CategoryItemList>
        {basicDataStructures.map((eachCategory) => (
          <CategoryLink
            catName={eachCategory.name}
            catIcon={eachCategory.icon}
            catLink={eachCategory.link}
            path={path}
          />
        ))}
      </CategoryItemList>
      <CategoryItemList>
        {algorithms.map((eachCategory) => (
          <CategoryLink
            catName={eachCategory.name}
            catIcon={eachCategory.icon}
            catLink={eachCategory.link}
            path={path}
          />
        ))}
      </CategoryItemList>
      <CategoryItemList>
        {companies.map((eachCategory) => (
          <CategoryLink
            catName={eachCategory.name}
            catIcon={eachCategory.icon}
            catLink={eachCategory.link}
            path={path}
          />
        ))}
      </CategoryItemList>
    </Nav>
  );
};

export default CategoryMenu;
