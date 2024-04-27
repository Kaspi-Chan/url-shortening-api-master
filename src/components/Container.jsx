import React from 'react'

const Container = ({tag: Tag = "div", className = '', children, ...props }) => {
  const fullClassName = `container mx-auto px-5 md:px-7 2xl:px-20 ${className}`;
  return (
    <Tag
      {...props}
      className={fullClassName}>
        {children}
    </Tag>
  )
}

export default Container