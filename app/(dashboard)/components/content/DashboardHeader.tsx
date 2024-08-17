import React from 'react'

interface DashboardHeaderProps {
  headerTitle: string;
};

export default function DashboardHeader({ headerTitle }:DashboardHeaderProps) {
  return (
    <h1 className="p-3 border-b-2 border-primary md:mb-10 mb-5">{headerTitle}</h1>
  )
}
