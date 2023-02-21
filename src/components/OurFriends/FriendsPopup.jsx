import Popup from 'reactjs-popup';

export default function FriendsPopup({ children, trigger, workDays }) {
  return (
    <Popup
      trigger={trigger}
      position="bottom left"
      on={['hover', 'focus']}
      disabled={workDays ? false : true}
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={50}
      contentStyle={{
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '12px',
        border: '1px solid #F59256',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '1.33',
      }}
      arrow={false}
    >
      {children}
    </Popup>
  );
}
