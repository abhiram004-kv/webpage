import React from 'react'

function PgDetails() {
  return (
    <div style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #0b0b0b 0%, #1f1f1f 100%)', color: '#f5f5f5', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', background: 'rgba(20,20,20,0.95)', border: '1px solid rgba(255, 107, 0, 0.2)', borderRadius: '16px', padding: '2rem' }}>
        <h2 style={{ color: '#ff6b00', marginBottom: '1rem' }}>Page Details & Credits</h2>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#c6c6c6' }}>
          Game Center is a simple React demo site featuring a game gallery and detail views.
          Use the Browse button to explore games and the Details button to view this page.
        </p>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: '#c6c6c6' }}>
          This page shows short details about the project and credits for the interface.
          It demonstrates how to navigate within the app without using external routing.
        </p>
        <p style={{ lineHeight: '1.8', marginTop: '1.5rem', color: '#ff9b4b', fontWeight: '500' }}>
          Credits: Created by the Game Center demo author. Game names and artwork are used for presentation purposes only.
        </p>
      </div>
    </div>
  )
}

export default PgDetails