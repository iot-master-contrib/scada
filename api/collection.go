package api

import (
    "github.com/gin-gonic/gin"
    "github.com/iot-master-contrib/scada/types"
    "github.com/zgwit/iot-master/v3/pkg/curd"
)

// @Summary 查询集合数量
// @Schemes
// @Description 查询集合数量
// @Tags collection
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回集合数量
// @Router /collection/count [post]
func noopCollectionCount() {}

// @Summary 查询集合
// @Schemes
// @Description 查询集合
// @Tags collection
// @Param search body ParamSearch true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiCollection] 返回集合信息
// @Router /collection/search [post]
func noopCollectionSearch() {}

// @Summary 查询集合
// @Schemes
// @Description 查询集合
// @Tags collection
// @Param search query ParamList true "查询参数"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyList[types.HmiCollection] 返回集合信息
// @Router /collection/list [get]
func noopCollectionList() {}

// @Summary 创建集合
// @Schemes
// @Description 创建集合
// @Tags collection
// @Param search body types.HmiCollection true "集合信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiCollection] 返回集合信息
// @Router /collection/create [post]
func noopHmiCollectionCreate() {}

// @Summary 获取集合
// @Schemes
// @Description 获取集合
// @Tags collection
// @Param id path int true "集合ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiCollection] 返回集合信息
// @Router /collection/{id} [get]
func noopCollectionGet() {}

// @Summary 修改集合
// @Schemes
// @Description 修改集合
// @Tags collection
// @Param id path int true "集合ID"
// @Param collection body types.HmiCollection true "集合信息"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiCollection] 返回集合信息
// @Router /collection/{id} [post]
func noopCollectionUpdate() {}

// @Summary 删除集合
// @Schemes
// @Description 删除集合
// @Tags collection
// @Param id path int true "集合ID"
// @Accept json
// @Produce json
// @Success 200 {object} ReplyData[types.HmiCollection] 返回集合信息
// @Router /collection/{id}/delete [get]
func noopHmiCollectionDelete() {}

// @Summary 导出集合
// @Schemes
// @Description 导出集合
// @Tags product
// @Accept json
// @Produce octet-stream
// @Router /collection/export [get]
func noopHmiCollectionExport() {}

// @Summary 导入集合
// @Schemes
// @Description 导入集合
// @Tags product
// @Param file formData file true "压缩包"
// @Accept mpfd
// @Produce json
// @Success 200 {object} ReplyData[int64] 返回集合数量
// @Router /collection/import [post]
func noopHmiCollectionImport() {}

func collectionRouter(app *gin.RouterGroup) {

    app.POST("/count", curd.ApiCount[types.HmiCollection]())

    app.POST("/search", curd.ApiSearch[types.HmiCollection]())

    app.GET("/list", curd.ApiList[types.HmiCollection]())

    app.POST("/create", curd.ApiCreateHook[types.HmiCollection](curd.GenerateRandomId[types.HmiCollection](12), nil))

    app.GET("/:id", curd.ParseParamStringId, curd.ApiGet[types.HmiCollection]())

    app.POST("/:id", curd.ParseParamStringId, curd.ApiUpdateHook[types.HmiCollection](nil, nil,
        "id", "name", "desc", "pages", "devices"))

    app.POST("/:id/delete", curd.ParseParamStringId, curd.ApiDelete[types.HmiCollection]())

    app.GET("/export", curd.ApiExport("hmi_collection", "hmi_collection"))

    app.POST("/import", curd.ApiImport("hmi_collection"))

}
