import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID } from "@angular/core";
import * as THREE from "three";
import { MenuItem } from "../../../interfaces/menu-item.interface";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { WINDOW } from "../../../providers/window";

@Component({
  selector: "menu-item-preview",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./menu-item-preview.component.html",
  styleUrl: "./menu-item-preview.component.scss",
})
export class MenuItemPreviewComponent implements OnInit, AfterViewInit, OnChanges {
  private renderer: THREE.WebGLRenderer | undefined;
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private loader: GLTFLoader | undefined;
  private isBrowser: boolean;
  private renderedItem: THREE.Group | undefined;

  @Input() selectedMenuItem: MenuItem | undefined;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.isBrowser) {
      console.log(this.selectedMenuItem);
      this.resetScene();
      this.loadModel();
    }
  }

  ngAfterViewInit(): void {
    if (WINDOW && this.isBrowser && this.el.nativeElement) {
      this.initThreeJS();
      this.loadModel();
      this.animate();
    }
  }

  private initThreeJS() {
    const width = 600;
    const height = 400;

    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x87ceeb);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    // Create the scene
    this.scene = new THREE.Scene();

    // Create the camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    this.camera.position.z = 7;
    this.camera.position.y = 2;
    this.camera.position.x = 4;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 100); // soft white light
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 100);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    this.loader = new GLTFLoader();
  }

  private loadModel() {
    const modelUrl = "../../../../assets/3d-objects/" + this.selectedMenuItem?.threeJsFile;
    this.loader?.load(
      modelUrl,
      (gltf: any) => {
        this.renderedItem = gltf.scene; // Store the loaded model
        this.scene?.add(gltf.scene);
      },
      undefined,
      (error: any) => {
        console.error(error);
        //file not ready yet load best looking model
        this.loader?.load(
          "../../../../assets/3d-objects/bubble_tea_and_cookies.glb",
          (gltf: any) => {
            this.renderedItem = gltf.scene; // Store the loaded model
            this.scene?.add(gltf.scene);
          },
          undefined,
          (error: any) => {
            console.error(error);
          },
        );
      },
    );
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    // Rotate the renderedItem slowly if it exists
    if (this.renderedItem) {
      this.renderedItem.rotation.y += 0.01;
    }

    if (this.scene && this.camera && this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private resetScene() {
    if (this.scene && this.camera && this.renderer) {
      this.scene.remove(this.renderedItem!);
      this.renderedItem = undefined;
    }
  }
}
