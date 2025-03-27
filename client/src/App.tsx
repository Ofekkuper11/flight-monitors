import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [altitude, setAltitude] = useState(0);
  const [hsi, setHsi] = useState(0);
  const [adi, setAdi] = useState(0);
  const [viewMode, setViewMode] = useState('visual');

  const sendDataToServer = async () => {
    try {
      await axios.post('http://localhost:5000/api/data', {
        altitude,
        hsi,
        adi
      });
      alert('הנתונים נשמרו בהצלחה!');
    } catch (err) {
      console.error(err);
      alert('שגיאה בשליחת נתונים');
    }
  };

  return (
    <div className="container">
      <div className="top-buttons">
        <button onClick={() => setViewMode('text')}>TEXT</button>
        <button onClick={() => setViewMode('visual')}>VISUAL</button>
        <button onClick={sendDataToServer}>+</button>
      </div>

      <div className="layout">
        <div className="card">
          <label>Altitude (0–3000):</label>
          <input type="number" min="0" max="3000" value={altitude} onChange={(e) => setAltitude(Number(e.target.value))} />

          <label>HSI (0–360):</label>
          <input type="number" min="0" max="360" value={hsi} onChange={(e) => setHsi(Number(e.target.value))} />

          <label>ADI (0–100):</label>
          <input type="number" min="0" max="100" value={adi} onChange={(e) => setAdi(Number(e.target.value))} />

          <button onClick={sendDataToServer}>SEND</button>
        </div>

        {viewMode === 'visual' && (
          <div className="visual-panel">
            {/* Altitude */}
            <div className="visual-box">
              <div style={{
                width: '50px', height: '300px', border: '1px solid black',
                display: 'flex', flexDirection: 'column-reverse', background: '#eee'
              }}>
                <div style={{
                  height: `${(altitude / 3000) * 100}%`, width: '100%', background: 'skyblue'
                }} />
              </div>
              <span>Altitude</span>
            </div>

            {/* HSI */}
            <div className="visual-box">
              <div style={{
                width: '150px', height: '150px', borderRadius: '50%',
                border: '2px solid black', position: 'relative'
              }}>
                {/* חץ קבוע */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  width: '2px', height: '55px', backgroundColor: 'black',
                  transform: 'translate(-50%, -100%)'
                }}></div>

                {/* חץ מסתובב */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '2px',
                  height: '40px',
                  backgroundColor: 'orange',
                  transform: `translate(-50%, -100%) rotate(${hsi}deg)`,
                  transformOrigin: 'bottom center'
                }}>
                  <div style={{
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderBottom: '10px solid orange',
                    position: 'absolute',
                    top: '-10px',
                    left: '-6px'
                  }}></div>
                </div>
                

                {/* סימוני מצפן */}
                <div style={{
                  position: 'absolute', top: '5px', left: '50%',
                  transform: 'translateX(-50%)', fontSize: '12px'
                }}>0</div>
                <div style={{
                  position: 'absolute', top: '50%', right: '5px',
                  transform: 'translateY(-50%)', fontSize: '12px'
                }}>90</div>
                <div style={{
                  position: 'absolute', bottom: '5px', left: '50%',
                  transform: 'translateX(-50%)', fontSize: '12px'
                }}>180</div>
                <div style={{
                  position: 'absolute', top: '50%', left: '5px',
                  transform: 'translateY(-50%)', fontSize: '12px'
                }}>270</div>
              </div>
              <span>HSI</span>
            </div>

            {/* ADI */}
            <div className="visual-box">
              <div style={{
                width: '150px', height: '150px', borderRadius: '50%',
                border: '2px solid black', backgroundColor: adi === 100 ? 'blue' : adi === 0 ? 'green' : '#ccc'
              }}></div>
              <span>ADI</span>
            </div>
          </div>
        )}

        {viewMode === 'text' && (
          <div className="text-display">
            <div className="circle-value">Altitude<br />{altitude}</div>
            <div className="circle-value">HSI<br />{hsi}</div>
            <div className="circle-value">ADI<br />{adi}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
