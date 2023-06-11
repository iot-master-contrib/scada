package types

import "time"

type HmiHtml struct {
	Id         string    `json:"id,omitempty" xorm:"pk"`
	Name       string    `json:"name,omitempty"`
	Icon       string    `json:"icon,omitempty"`
	Html       string    `json:"html,omitempty"`
	Collection string    `json:"collection,omitempty" xorm:"index"`
	Updated    time.Time `json:"updated" xorm:"updated"`
	Created    time.Time `json:"created" xorm:"created"`
}
