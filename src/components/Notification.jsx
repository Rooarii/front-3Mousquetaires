import React from 'react';

export default function Notification() {
  const notifications = [
    {id: 1, message: '19 janvier 2021 - Impression 3D (gratuit)'},
    {id: 2, message: '21 janvier 2021 - Découpe laser (gratuit)'},
    {id: 3, message: '27 janvier 2021 - Impression UV (gratuit)'},
    {id: 4, message: '2 février 2021 - Impression 3D (gratuit)'},
    {id: 5, message: '4 février 2021 - Découpe laser (gratuit)'},
  ];

    return(
    <div className="notification-container">
      {
        notifications.map(notification => (
          <div className="notifcations">
            <span>{notification.message}</span>
            <div className="icon-notification">
              <i class="fas fa-check-circle" />
              <i class="fas fa-times-circle" />
            </div>  
          </div>
        ))
      }
    </div>
  );
}