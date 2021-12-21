import {
  CallExecuted as CallExecutedEvent,
  CallScheduled as CallScheduledEvent,
  Cancelled as CancelledEvent,
  MinDelayChange as MinDelayChangeEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent
} from "../generated/Timelock/Timelock"
import {
  CallExecuted,
  CallScheduled,
  Cancelled,
  MinDelayChange,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/schema"

export function handleCallExecuted(event: CallExecutedEvent): void {
  let entity = new CallExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.index = event.params.index
  entity.target = event.params.target
  entity.value = event.params.value
  entity.data = event.params.data
  entity.save()
}

export function handleCallScheduled(event: CallScheduledEvent): void {
  let entity = new CallScheduled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.index = event.params.index
  entity.target = event.params.target
  entity.value = event.params.value
  entity.data = event.params.data
  entity.predecessor = event.params.predecessor
  entity.delay = event.params.delay
  entity.save()
}

export function handleCancelled(event: CancelledEvent): void {
  let entity = new Cancelled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.save()
}

export function handleMinDelayChange(event: MinDelayChangeEvent): void {
  let entity = new MinDelayChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldDuration = event.params.oldDuration
  entity.newDuration = event.params.newDuration
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}
