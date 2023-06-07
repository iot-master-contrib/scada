package api

import (
	"github.com/gin-gonic/gin"
	"github.com/iot-master-contrib/scada/types"
	"github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询组件数量
// @Schemes
// @Description 查询组件数量
// @Tags component
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回组件数量
// @Router /component/count [post]
func noopComponentCount() {}

// @Summary 查询组件
// @Schemes
// @Description 查询组件
// @Tags component
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiComponent] 返回组件信息
// @Router /component/search [post]
func noopComponentSearch() {}

// @Summary 查询组件
// @Schemes
// @Description 查询组件
// @Tags component
// @Param search query ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiComponent] 返回组件信息
// @Router /component/list [get]
func noopComponentList() {}

// @Summary 创建组件
// @Schemes
// @Description 创建组件
// @Tags component
// @Param search body types.HmiComponent true "组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiComponent] 返回组件信息
// @Router /component/create [post]
func noopHmiComponentCreate() {}

// @Summary 获取组件
// @Schemes
// @Description 获取组件
// @Tags component
// @Param id path int true "组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiComponent] 返回组件信息
// @Router /component/{id} [get]
func noopComponentGet() {}

// @Summary 修改组件
// @Schemes
// @Description 修改组件
// @Tags component
// @Param id path int true "组件ID"
// @Param component body types.HmiComponent true "组件信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiComponent] 返回组件信息
// @Router /component/{id} [post]
func noopComponentUpdate() {}

// @Summary 删除组件
// @Schemes
// @Description 删除组件
// @Tags component
// @Param id path int true "组件ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiComponent] 返回组件信息
// @Router /component/{id}/delete [get]
func noopHmiComponentDelete() {}

// @Summary 导出组件
// @Schemes
// @Description 导出组件
// @Tags product
// @Accept json
// @Produce octet-stream
// @Router /component/export [get]
func noopHmiComponentExport() {}

// @Summary 导入组件
// @Schemes
// @Description 导入组件
// @Tags product
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回组件数量
// @Router /component/import [post]
func noopHmiComponentImport() {}

func componentRouter(app *gin.RouterGroup) {

	app.POST("/count", curd.ApiCount[types.HmiComponent]())

	app.POST("/search", curd.ApiSearch[types.HmiComponent]("id", "name", "icon", "type", "collection"))

	app.GET("/list", curd.ApiList[types.HmiComponent]("id", "name", "icon", "type", "collection"))

	app.POST("/create", curd.ApiCreateHook[types.HmiComponent](curd.GenerateRandomId[types.HmiComponent](12), nil))

	app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[types.HmiComponent]())

	app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[types.HmiComponent](nil, nil,
		"id", "name", "icon", "type", "meta", "properties", "collection"))

	app.GET("/:id/delete", curd.ParseParamStringId, curd.ApiDelete[types.HmiComponent]())

	app.GET("/export", curd.ApiExport("hmi_component", "hmi_component"))

	app.POST("/import", curd.ApiImport("hmi_component"))

}
