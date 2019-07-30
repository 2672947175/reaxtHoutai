import React from 'react'
function RightBox(props) {
    return (
        <div className="reightBox" >
            <div className="top">改变右边背景颜色</div>
            <div className='letbtnbox' style={{ background: props.you ? 'blue' : 'seagreen' }}>
                静静的等待操作
            </div>

        </div>
    )
}
export default RightBox