'use client'
import { Spin } from 'antd';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-full h-screen flex justify-center items-center"><Spin/></div>
    )
  }