import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

export default function Disclaimer() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
      {
        show
        &&
        <Alert variant="secondary" onClose={handleClose} className="disc-cont" dismissible>
          < Alert.Heading >
            Disclaimer
      </Alert.Heading >
          <p>
            When enjoyed in moderation, alcohol can form part of a healthy lifestyle that includes good diet and exercise.
            On the other hand, excessive drinking can have harmful effects on your health. Please drink responsibly. For more information,
            please visit
        <Alert.Link href="https://drinkwise.org.au/" target="_blank" rel="noreferrer">
              {/* Represents a spacebar for formatting purposes */}
              &nbsp;DrinkWise.org.
            </Alert.Link>
          </p>

        </Alert >
      }
    </>
  )
}
