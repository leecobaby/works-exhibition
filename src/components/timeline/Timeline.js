import React from 'react'
import './index.css'
import source from '../../data.json'
import { Timeline as AntTimeline, Tooltip } from 'antd'

export const Timeline = () => {
  const data = source.works
  return (
    <AntTimeline mode="left" className="persets">
      {data.map((v) => (
        <AntTimeline.Item label={v.date}>
          <Tooltip placement='rightTop' title={v.description}>
            <a href={v.url} target="_blank" rel="noopener noreferrer" className="link">
              {v.title}
            </a>
          </Tooltip>
        </AntTimeline.Item>
      ))}
    </AntTimeline>
  )
}
