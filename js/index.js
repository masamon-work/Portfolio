// page loading ページの読み込みを待つ
window.addEventListener('DOMContentLoaded', init);

function init() {
    // set size 変数指定(レンダラーのサイズ指定、canvasのクラス取得)
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvasElement = document.querySelector('#myCanvas');

    // マウス座標管理用のベクトルを作成
    const mouse = new THREE.Vector2();

    // render レンダラーを作る
    const renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
    });
    // レンダラーのサイズ指定
    renderer.setSize(width, height);
    // Scene背景色を指定
    renderer.setClearColor(0xffffff, 1.0);

    // scene シーンを作る
    const scene = new THREE.Scene();

    // camera カメラを作る new THREE.PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
    const camera = new THREE.PerspectiveCamera(45, width / height);
    // XY for cam カメラの初期座標を設定
    camera.position.set(0, 0, 1000);

    // control camera カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera, canvasElement);

    // cam controller setteing 滑らかにカメラコントローラーを制御する
    controls.enableDamping = true;
    controls.dampingFactor = 0.009;
    //controls.enableZoom = false
    //controls.enablePan = false

    // light ライトを作る new THREE.DirectionalLight(色) 平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    // ライトの方向
    directionalLight.position.set(1, 1, 8);
    // directionalLight.castShadow = false; //影をなくす(default:false)
    // シーンに追加
    scene.add(directionalLight);

    // 環境光源
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);    

    // material マテリアル(素材)を用意
    // const texture = new THREE.TextureLoader().load("https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg");
    const texture = new THREE.TextureLoader().load("https://cdn.shopify.com/s/files/1/0686/8962/5399/files/2022_01.png?v=1669872926&width=500");
    // const texture = new THREE.TextureLoader().load("img/shoplogo.jpg");
    const material = new THREE.MeshStandardMaterial({
        // map: new THREE.TextureLoader().load('https://cdn.shopify.com/s/files/1/0637/8045/4646/files/kv_image_insta_1350_1080-03.jpg?v=1653721041'),
        // map: new THREE.TextureLoader().load('img/logo.jpg'),
        // map: new THREE.TextureLoader().load('https://cdn.shopify.com/s/files/1/0686/8962/5399/files/2022_01.png?v=1669872926&width=500'),
        // map: new THREE.TextureLoader().load("https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg"),
        map: texture,
        // color: 0x0000ff
        // color: 0xFFFFFF
    });

    // sphere 球体のジオメトリ(形状)を用意
    const geometry = new THREE.SphereGeometry(200, 30, 30);
    // sphere ドーナツ形状のジオメトリ(形状)を用意
    // const geometry = new THREE.TorusGeometry(120,30,150,1000);
    // materilal mesh メッシュ(表示オブジェクト)を作成 new THREE.Mesh(ジオメトリ,マテリアル)
    const earthMesh = new THREE.Mesh(geometry, material);
    // mesh to scene シーンに追加
    scene.add(earthMesh);

    // particles 星屑を作成(カメラの動きをわかりやすくするため)
    // 画像の数分繰り返す(ランダムに画像が出力)
    for (let i = 0; i < img.length; i++) {
        createStarField();
    }

    /** particles */
    function createStarField() {
        // points 頂点情報を格納する配列
        const vertices = [];
        // number of points 一辺3000の距離の中へランダムに1000個の粒子を配置
        // for (let i = 0; i < 1000; i++) {
        // 一辺3000の距離の中へランダムに100個の粒子を配置
        for (let i = 0; i < 50; i++) {
        const x = 3000 * (Math.random() - 0.5);
        const y = 3000 * (Math.random() - 0.5);
        const z = 3000 * (Math.random() - 0.5);
        
        vertices.push(x, y, z);
        }

        // texture data 形状データ(頂点座標を格納した配列verticesからジオメトリ)を作成
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        
        // image.jsから変数imgをランダムで抽出
        let imagData = img[Math.floor(Math.random() * img.length)];
        console.log(imagData);

        // 画像データを格納
        // const texture = new THREE.TextureLoader().load("../image/logo/shoplogo.jpg");
        const texture = new THREE.TextureLoader().load(imagData);

        // マウスとの交差を調べたいものは配列に格納する
        const meshList = [];
        for (let i = 0; i < 50; i++) {
            // material マテリアル(粒子)を作成
            const material = new THREE.PointsMaterial({
                // // 一つ一つのサイズ
                size: 100,
                // 色
                // color: 0x000000,
                // 粒子に画像を挿入
                map: texture,
            });

            // object 物体を作成
            const mesh = new THREE.Points(geometry, material);

            // mesh.position.x = (Math.random() - 0.5) * 800;
            // mesh.position.y = (Math.random() - 0.5) * 800;
            // mesh.position.z = (Math.random() - 0.5) * 800;
            // mesh.rotation.x = Math.random() * 2 * Math.PI;
            // mesh.rotation.y = Math.random() * 2 * Math.PI;
            // mesh.rotation.z = Math.random() * 2 * Math.PI;
            scene.add(mesh);

            // 配列に保存
            meshList.push(mesh);
        }

        // レイキャストを作成
        const raycaster = new THREE.Raycaster();

        canvasElement.addEventListener('mousemove', handleMouseMove);
        tick();
        
        // マウスを動かしたときのイベント
        function handleMouseMove(event) {
            const element = event.currentTarget;
            // canvas要素上のXY座標
            const x = event.clientX - element.offsetLeft;
            const y = event.clientY - element.offsetTop;
            // canvas要素の幅・高さ
            const w = element.offsetWidth;
            const h = element.offsetHeight;
    
            // -1〜+1の範囲で現在のマウス座標を登録する
            mouse.x = (x / w) * 2 - 1;
            mouse.y = -(y / h) * 2 + 1;
        }
    
        // 毎フレーム時に実行されるループイベントです
        function tick() {
            // レイキャスト = マウス位置からまっすぐに伸びる光線ベクトルを生成
            raycaster.setFromCamera(mouse, camera);

            // その光線とぶつかったオブジェクトを得る
            const intersects = raycaster.intersectObjects(meshList);

            meshList.map((mesh) => {
                // 交差しているオブジェクトが1つ以上存在し、
                // 交差しているオブジェクトの1番目(最前面)のものだったら
                if (intersects.length > 0 && mesh === intersects[0].object) {
                // 色を赤くする
                // mesh.material.color.setHex(0xff0000);
                mesh.scale.set(2,2,2);
                } else {
                // それ以外は元の色にする
                // mesh.material.color.setHex(0xffffff);
                mesh.scale.set(1,1,1);
                }
            });

            // レンダリング
            // renderer.render(scene, camera);
            // requestAnimationFrame(tick);
        }

        // tick2();
        // function tick2() {
        // mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.01;
        // }

        // $(function(){
        //     $("mesh").mouseover(function(){
        //         // let scale = 2
        //         mesh.scale.set(2,2,2);
        //     })
        // })

        // click();
        // function click() {
        //   mesh.scale.set(2,2,2);
        // }

        // <a href="imagData" data-lightbox="abc" data-title="桜写真拡大">
        //   <img src="imagData" alt="桜写真">
        // </a>
    }

    tick();

    // frame 毎フレーム時に実行されるループイベントです
    function tick() {
        // rotaring 球体を回転させる
        earthMesh.rotation.y += 0.01;

        // cam controler update カメラコントローラーを更新
        controls.update();

        // 描画する
        renderer.render(scene, camera);

        requestAnimationFrame(tick);
    }
}
