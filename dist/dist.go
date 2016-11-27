package dist

import "github.com/elazarl/go-bindata-assetfs"

// AssetFS() exposes binary go asset as a filesystem
func AssetFS() *assetfs.AssetFS {
	for k := range _bintree.Children {
		return &assetfs.AssetFS{Asset: Asset, AssetDir: AssetDir, AssetInfo: AssetInfo, Prefix: k}
	}
	panic("unreachable")
}
