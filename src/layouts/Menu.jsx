import React, { useCallback, useContext } from "react";
import styled from "@emotion/styled";
import Hamburger from "../elements/hamburger";
import { WebsiteSettingContext } from "../providers/WebsiteProvider";
import ThemedAniLink from "../elements/ThemeAnilink";

const menuWidth = "480px";

const HAMBURGER_MENU_RIGHT = [
  `calc(100vw - 9rem)`,
  `calc(100vw - ${menuWidth} + 5.1rem)`,
  `calc(100vw - ${menuWidth} - ${menuWidth} + 5.1rem)`,
];

const PRIMARY_MENU_LEFT = [
  `calc(100vw - 3.25rem)`,
  `calc(100vw - ${menuWidth})`,
  `calc(100vw - ${menuWidth} - ${menuWidth})`,
];

const PRIMARY_MENU_LEFT_MOBILE = [`calc(100vw + 3.25rem)`, `0`, `0`];

const SECONDARY_MENU_LEFT = [
  `calc(100vw)`,
  `calc(100vw)`,
  `calc(100vw - ${menuWidth})`,
];

const SECONDARY_MENU_TOP = [
  `calc(100vh - 0px)`,
  `calc(100vh - 0px)`,
  `calc(100vh - 380px)`,
];

const SECONDARY_MENU_LEFT_TABLET = [`3.25rem`, `3.25rem`, `3.25rem`];

const SECONDARY_MENU_LEFT_MOBILE = [`0`, `0`, `0`];

const HamburgerHolder = styled.div`
  position: fixed;
  z-index: 2000;
  top: 4rem;
  left: ${({ menuOpenLevel }) => HAMBURGER_MENU_RIGHT[menuOpenLevel]};
  transition: left
    ${({ menuOpenLevel }) => (menuOpenLevel < 2 ? "0.7s" : "1.2s")} ease;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 2rem;
    right: 1.5rem;
    left: unset;
  }
`;

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const PrimaryMenu = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: ${({ menuOpenLevel }) => PRIMARY_MENU_LEFT[menuOpenLevel]};
  height: 100vh;
  width: ${menuWidth};
  background-color: var(--page-theme-color, var(--primary-color-3));
  min-height: 320px;
  transition: left 0.7s ease;

  @media (max-width: 768px) {
    width: 100vw;
    left: ${({ menuOpenLevel }) => PRIMARY_MENU_LEFT_MOBILE[menuOpenLevel]};
    transition: all 0.7s ease;

    .primaryMenu {
      transform: ${({ menuOpenLevel }) =>
        menuOpenLevel === 2 && "translateY(-6rem)"};
      transition: all 0.7s ease;
    }
  }

  .menu-item {
    cursor: pointer;
    color: inherit;
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-menu-hover-color, var(--primary-color-3));
    }

    a {
      color: inherit;
      &:hover {
        color: var(--primary-menu-hover-color, var(--primary-color-3));
      }
    }
  }
`;

const SecondaryMenu = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: ${({ menuOpenLevel }) => SECONDARY_MENU_LEFT[menuOpenLevel]};
  height: 100vh;
  width: ${menuWidth};
  background-color: var(--primary-color-3);
  min-height: 320px;
  transition: all 0.7s ease;
  font-size: 3rem;
  line-height: var(--line-height-2);
  color: inherit;

  @media (max-width: 768px) {
    width: 100vw;
    top: ${({ menuOpenLevel }) => SECONDARY_MENU_TOP[menuOpenLevel]};
    left: ${({ menuOpenLevel }) => SECONDARY_MENU_LEFT_TABLET[menuOpenLevel]};
    transition: all 0.7s ease;
    .secondaryMenu {
      padding: 4rem 0px 4rem 4.75rem;
      height: 100%;
      justify-content: flex-start;
    }
  }

  @media (max-width: 480px) {
    left: ${({ menuOpenLevel }) => SECONDARY_MENU_LEFT_MOBILE[menuOpenLevel]};
    .secondaryMenu {
      padding: 4rem 0px 4rem 1.5rem;
    }
  }

  .menu-item {
    cursor: pointer;
    transition: all 0.3s ease;
    color: inherit;
    &:hover {
      color: var(--secondary-menu-hover-color, var(--page-theme-color));
    }

    a {
      color: inherit;
      &:hover {
        color: var(--secondary-menu-hover-color, var(--page-theme-color));
      }
    }
  }
`;

const MenuItemList = styled.div`
  width: 100%;
  flex-shrink: 0;
  padding: 3rem 0px 4rem 2rem;
  font-size: 3rem;
  line-height: var(--line-height-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    padding: 3rem 0px 4rem 1.5rem;
  }
`;

const MenuOverlay = styled.div`
  z-index: 5;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export default function Menu() {
  const {
    settings,
    menuOpenLevel,
    setMenuOpenLevel,
    expandedMenu,
    setExpandedMenu,
  } = useContext(WebsiteSettingContext);

  const onClose = useCallback(() => {
    setMenuOpenLevel(0);
    setExpandedMenu(null);
  });

  return (
    <>
      {menuOpenLevel > 0 && <MenuOverlay onClick={onClose} />}
      <HamburgerHolder
        menuOpenLevel={menuOpenLevel}
        onClick={() => {
          if (menuOpenLevel > 0) {
            setMenuOpenLevel(0);
            setExpandedMenu(null);
          } else {
            if (menuOpenLevel < 2) {
              setMenuOpenLevel(menuOpenLevel + 1);
            }
          }
        }}
      >
        <Hamburger color="white" isActive={menuOpenLevel > 0} />
      </HamburgerHolder>
      {/* Add onClick event to PrimaryMenu for handling background click */}
      <PrimaryMenu menuOpenLevel={menuOpenLevel}>
        <MenuContent>
          <BookMarkMenu menuOpenLevel={menuOpenLevel} onClose={onClose} />
          <MenuItemList className="primaryMenu">
            <div>{/* For future contents */}</div>
            <div>
              {settings?.mainNavigation?.map((item, key) => (
                <MenuItem
                  key={key}
                  item={item}
                  expandedMenu={expandedMenu}
                  onClose={onClose}
                  onExpand={() => {
                    setExpandedMenu(item);
                    if (menuOpenLevel < 2) setMenuOpenLevel(menuOpenLevel + 1);
                  }}
                />
              ))}
            </div>
            <div>{/* For future contents */}</div>
          </MenuItemList>
        </MenuContent>
      </PrimaryMenu>
      <SecondaryMenu menuOpenLevel={menuOpenLevel}>
        <MenuContent>
          <MenuItemList className="secondaryMenu">
            <div>{/* For future contents */}</div>
            <div>
              {expandedMenu?.submenus?.map((item, key) => (
                <MenuItem key={key} item={item} onClose={onClose} />
              ))}
            </div>
            <div>{/* For future contents */}</div>
          </MenuItemList>
        </MenuContent>
      </SecondaryMenu>
    </>
  );
}

function MenuItem({ item, onExpand, onClose }) {
  if (item.submenus) {
    return (
      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click event from reaching the PrimaryMenu
          onExpand(item);
        }}
        className="menu-item"
      >
        {item.label}
      </div>
    );
  }

  return (
    <div className="menu-item">
      <ThemedAniLink
        to={item.link}
        openNewTab={item.openNewTab}
        className="menu-item"
        onClick={onClose}
      >
        {item.label}
      </ThemedAniLink>
    </div>
  );
}

const BookMarkMenuWrapper = styled.div`
  width: 3.25rem;
  height: 100%;
  display: flex;
  font-size: 0.82rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 0 12rem 0;
  @media (max-width: 480px) {
    display: none;
  }
`;

const BookMarkMenuItemTop = styled.div`
  transform: rotate(90deg);
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;

  a {
    color: var(--page-theme-text-color);
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const BookMarkMenuItemBottom = styled.div`
  transform: rotate(90deg);
  text-transform: uppercase;
  white-space: nowrap;
  a {
    color: var(--page-theme-text-color);
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.6;
    }
  }
`;

function BookMarkMenu({ onClose }) {
  return (
    <BookMarkMenuWrapper>
      <BookMarkMenuItemTop>
        <ThemedAniLink to={"/developers"} onClick={onClose}>
          BUILDERS PROGRAM
        </ThemedAniLink>
      </BookMarkMenuItemTop>
      <BookMarkMenuItemBottom>
        {" "}
        <ThemedAniLink to={"/ecosystem"} onClick={onClose}>
          JOIN THE COMMUNITY
        </ThemedAniLink>
      </BookMarkMenuItemBottom>
    </BookMarkMenuWrapper>
  );
}
