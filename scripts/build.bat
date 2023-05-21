set CFLAGS="-DNDEBUG /O2 /arch:AVX -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable"
set CXXFLAGS="-DNDEBUG /O2 /arch:AVX -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable"
set CPPFLAGS="-DNDEBUG /O2 /arch:AVX -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable"
set LDFLAGS="-Wl,-O3 -mavx -maes -s"
set VERBOSE=1
set V=1

set MSVS_VERSION="2017"
set GYP_MSVS_VERSION="2017"
set ELECTRON_CACHE="${PWD}/electron/bin"
set electron_config_cache="${PWD}/electron/bin"

npm run burnthemall

set NODE_ENV=production

npm run dist

cd ..\dist

python3 -m castlabs_evs.vmp sign-pkg out\win-unpacked

cd ..\scripts

npm run dist-win
