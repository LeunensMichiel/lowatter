import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

import { useIntl } from "gatsby-plugin-intl"
import Modal from "react-modal"

import colors from "./framework/colors"
import screens from "./framework/screens"
import Story from "./story"
import Cross from "../images/svg/cross.inline.svg"

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const NotificationContainer = styled.aside`
  display: ${props => (props.isOpen ? "initial" : "none")};
  width: 100%;
  max-width: 360px;
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  z-index: 200;
  background: ${colors.darkAccent};
  padding: 2rem;
  border-radius: 50px 25px;
  animation: ${FadeIn} 1s ease;
  h4 {
    font-size: 1rem;
    color: ${colors.white};
  }
  p {
    font-size: 0.9rem;
    margin-bottom: 0;
    color: ${colors.white};
  }
  a {
    display: inline-block;
    font-size: 0.9rem;
    margin-top: 1rem;
    text-decoration: underline;
    color: ${colors.accent2};
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colors.white};
    }
  }
  @media ${screens.mobileM} {
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25px 25px 0 0;
    padding: 1.5rem;
    max-width: unset;
    h4 {
      font-size: 0.875rem;
      padding-top: 0.5rem;
      margin-bottom: 0.1rem;
    }
    p {
      font-size: 0.875rem;
    }
    a {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
  }
`

const NotificationCross = styled(Cross)`
  width: 16px;
  position: absolute;
  top: -8px;
  right: 16px;
  cursor: pointer;
  fill: ${colors.white};
  transition: fill 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus {
    fill: ${colors.accent2};
  }
  @media ${screens.mobileM} {
    top: -12px;
  }
`

const StyledCross = styled(Cross)`
  grid-column: 8;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  width: 64px;
  cursor: pointer;
  fill: ${colors.white};
  transition: fill 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover,
  &:focus {
    fill: ${colors.darkAccent};
  }
  @media ${screens.laptop} {
    justify-self: end;
    grid-column: 7;
    margin-top: 2.5rem;
  }
  @media ${screens.mobileM} {
    justify-self: start;
    margin-top: 1rem;
    width: 45px;
    grid-column: 2;
  }
`
const Notification = ({ notification }) => {
  const intl = useIntl()

  const [modalIsOpen, setIsOpen] = useState(false)
  const [notificationIsOpen, setNotificationIsOpen] = useState(false)
  useEffect(
    () =>
      setNotificationIsOpen(
        localStorage.getItem("notification") !==
          `${notification.titleNl}-${notification.begindate}`
      ),
    [notification.titleNl, notification.begindate]
  )

  const story = {
    title:
      intl.locale === "nl"
        ? notification.titleNl
        : intl.locale === "en"
        ? notification.titleEn
        : notification.titleFr,
    description:
      intl.locale === "nl"
        ? notification.descriptionNl
        : intl.locale === "en"
        ? notification.descriptionEn
        : notification.descriptionFr,
    date: notification.begindate,
    html:
      intl.locale === "nl"
        ? notification.relatedStoryNl
        : intl.locale === "en"
        ? notification.relatedStoryEn
        : notification.relatedStoryFr,
  }

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const setLocalStorage = () => {
    if (typeof window !== `undefined`) {
      localStorage.setItem(
        "notification",
        `${notification.titleNl}-${notification.begindate}`
      )
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
        appElement={
          typeof window !== "undefined" && document.getElementById("gatsby-focus-wrapper")
        }
        contentLabel={notification.title}
      >
        <StyledCross onClick={closeModal} />
        {notification.relatedStoryNl && <Story story={story} />}
      </Modal>
      <NotificationContainer isOpen={notificationIsOpen}>
        <NotificationCross
          onClick={() => {
            setNotificationIsOpen(false)
            setLocalStorage()
          }}
        />
        <h4>{story.title}</h4>
        <p>{story.description}</p>
        {notification.relatedStoryNl && (
          <a
            tabIndex="0"
            role="button"
            onClick={() => openModal()}
            onKeyDown={() => openModal()}
          >
            {intl.formatMessage({ id: "index.learnMore" })}
          </a>
        )}
      </NotificationContainer>
    </>
  )
}

Notification.propTypes = {
  notification: PropTypes.object,
}

export default Notification
