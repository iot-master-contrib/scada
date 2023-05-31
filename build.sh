
# 整体编译
go env -w GOPROXY=https://goproxy.cn,direct
go env -w GOPRIVATE=*.gitlab.com,*.gitee.com
go env -w GOSUMDB=off

app="scada"
version="1.0.0"

npm run build

pkg="github.com/zgwit/iot-master/v3/pkg/build"
gitHash=$(git show -s --format=%H)
buildTime=$(date -d today +"%Y-%m-%d %H:%M:%S")

# -w -s
ldflags="-X '${pkg}.Version=$version' \
-X '${pkg}.GitHash=$gitHash' \
-X '${pkg}.Build=$buildTime'"


export GOARCH=amd64

export GOOS=windows
go build -ldflags "$ldflags" -o scada.exe cmd/main.go

export GOOS=linux
go build -ldflags "$ldflags" -o scada cmd/main.go
