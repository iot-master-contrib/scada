package api

import (
	"github.com/gin-gonic/gin"
	"github.com/iot-master-contrib/scada/types"
	"github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询工程数量
// @Schemes
// @Description 查询工程数量
// @Tags project
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回工程数量
// @Router /project/count [post]
func noopProjectCount() {}

// @Summary 查询工程
// @Schemes
// @Description 查询工程
// @Tags project
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiProject] 返回工程信息
// @Router /project/search [post]
func noopProjectSearch() {}

// @Summary 查询工程
// @Schemes
// @Description 查询工程
// @Tags project
// @Param search query ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiProject] 返回工程信息
// @Router /project/list [get]
func noopProjectList() {}

// @Summary 创建工程
// @Schemes
// @Description 创建工程
// @Tags project
// @Param search body types.HmiProject true "工程信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiProject] 返回工程信息
// @Router /project/create [post]
func noopHmiProjectCreate() {}

// @Summary 获取工程
// @Schemes
// @Description 获取工程
// @Tags project
// @Param id path int true "工程ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiProject] 返回工程信息
// @Router /project/{id} [get]
func noopProjectGet() {}

// @Summary 修改工程
// @Schemes
// @Description 修改工程
// @Tags project
// @Param id path int true "工程ID"
// @Param project body types.HmiProject true "工程信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiProject] 返回工程信息
// @Router /project/{id} [post]
func noopProjectUpdate() {}

// @Summary 删除工程
// @Schemes
// @Description 删除工程
// @Tags project
// @Param id path int true "工程ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiProject] 返回工程信息
// @Router /project/{id}/delete [get]
func noopHmiProjectDelete() {}

// @Summary 导出工程
// @Schemes
// @Description 导出工程
// @Tags product
// @Accept json
// @Produce octet-stream
// @Router /project/export [get]
func noopHmiProjectExport() {}

// @Summary 导入工程
// @Schemes
// @Description 导入工程
// @Tags product
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回工程数量
// @Router /project/import [post]
func noopHmiProjectImport() {}
func projectRouter(app *gin.RouterGroup) {

	app.POST("/count", curd.ApiCount[types.HmiProject]())

	app.POST("/search", curd.ApiSearch[types.HmiProject]())

	app.GET("/list", curd.ApiList[types.HmiProject]())

	app.POST("/create", curd.ApiCreateHook[types.HmiProject](curd.GenerateRandomId[types.HmiProject](12), nil))

	app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[types.HmiProject]())

	app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[types.HmiProject](nil, nil,
		"id", "name", "desc", "pages", "devices"))

	app.POST("/:id/delete", curd.ParseParamStringId, curd.ApiDelete[types.HmiProject]())

	app.GET("/export", curd.ApiExport("hmi_project", "hmi_project"))

	app.POST("/import", curd.ApiImport("hmi_project"))

}
