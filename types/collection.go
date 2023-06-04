package types

import "time"

type HmiCollection struct {
	Id      string    `json:"id,omitempty"  xorm:"pk"`
	Name    string    `json:"name,omitempty"`
	Desc    string    `json:"desc,omitempty"`
	Created time.Time `json:"created" xorm:"created"`
}
