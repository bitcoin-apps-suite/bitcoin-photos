'use client'

import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

/** True on the client after hydration, false during SSR. */
export function useMounted(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false)
}

const SIDEBAR_KEY = 'devSidebarCollapsed'
const SIDEBAR_EVENT = 'devsidebar-change'

function subscribeSidebar(cb: () => void) {
  window.addEventListener('storage', cb)
  window.addEventListener(SIDEBAR_EVENT, cb)
  return () => {
    window.removeEventListener('storage', cb)
    window.removeEventListener(SIDEBAR_EVENT, cb)
  }
}

function readSidebar(): boolean {
  try {
    return localStorage.getItem(SIDEBAR_KEY) === 'true'
  } catch {
    return false
  }
}

/** Dev sidebar collapsed flag, persisted in localStorage and shared across components. */
export function useSidebarCollapsed(): [boolean, (v: boolean) => void] {
  const collapsed = useSyncExternalStore(subscribeSidebar, readSidebar, () => false)
  const set = (v: boolean) => {
    try {
      localStorage.setItem(SIDEBAR_KEY, String(v))
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event(SIDEBAR_EVENT))
  }
  return [collapsed, set]
}

function subscribeResize(cb: () => void) {
  window.addEventListener('resize', cb)
  return () => window.removeEventListener('resize', cb)
}

/** True when the viewport is 768px wide or less. */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribeResize, () => window.innerWidth <= 768, () => false)
}
